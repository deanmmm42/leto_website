import { NextRequest, NextResponse } from 'next/server'

// 飞书机器人 Webhook 地址（请替换为您的实际地址）
const FEISHU_WEBHOOK_URL = process.env.FEISHU_WEBHOOK_URL || ''

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    if (!FEISHU_WEBHOOK_URL) {
      console.error('飞书 Webhook 地址未配置')
      return NextResponse.json(
        { success: false, message: '服务配置错误' },
        { status: 500 }
      )
    }

    const formData: ContactFormData = await request.json()
    const { name, email, subject, message } = formData

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: '请填写所有必填字段' },
        { status: 400 }
      )
    }

    // 简单的邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: '请输入有效的邮箱地址' },
        { status: 400 }
      )
    }

    // 构建飞书消息格式
    const feishuMessage = {
      msg_type: 'interactive',
      card: {
        elements: [
          {
            tag: 'div',
            text: {
              content: `**📨 新的联系表单提交**`,
              tag: 'lark_md'
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'div',
            fields: [
              {
                is_short: true,
                text: {
                  content: `**👤 姓名：**\n${name}`,
                  tag: 'lark_md'
                }
              },
              {
                is_short: true,
                text: {
                  content: `**📧 邮箱：**\n${email}`,
                  tag: 'lark_md'
                }
              }
            ]
          },
          {
            tag: 'div',
            text: {
              content: `**📋 主题：**\n${subject}`,
              tag: 'lark_md'
            }
          },
          {
            tag: 'div',
            text: {
              content: `**💬 详细信息：**\n${message}`,
              tag: 'lark_md'
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'div',
            text: {
              content: `⏰ 提交时间：${new Date().toLocaleString('zh-CN', {
                timeZone: 'Asia/Shanghai',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}`,
              tag: 'lark_md'
            }
          }
        ],
        header: {
          template: 'blue',
          title: {
            content: 'LetoAI官网 - 联系表单',
            tag: 'plain_text'
          }
        }
      }
    }

    // 发送到飞书
    const response = await fetch(FEISHU_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feishuMessage),
    })

    if (!response.ok) {
      console.error('飞书API响应错误:', response.status, response.statusText)
      return NextResponse.json(
        { success: false, message: '消息发送失败，请稍后重试' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '感谢您的提交！我们会尽快与您联系。'
    })

  } catch (error) {
    console.error('处理联系表单时发生错误:', error)
    return NextResponse.json(
      { success: false, message: '提交失败，请稍后重试' },
      { status: 500 }
    )
  }
}