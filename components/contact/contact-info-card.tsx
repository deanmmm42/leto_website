import { contact } from "@/config/text"

interface ContactInfoCardProps {
  className?: string
}

export function ContactInfoCard({ className = "" }: ContactInfoCardProps) {
  return (
    <div className={className}>
      <div className="h-full rounded-xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="space-y-8">
          <div>
            <h4 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">{contact.info.address.title}</h4>
            <p className="text-slate-600 dark:text-white/60">{contact.info.address.content}</p>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">{contact.info.email.title}</h4>
            <p className="text-slate-600 dark:text-white/60">{contact.info.email.content}</p>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">{contact.info.workingHours.title}</h4>
            <div className="space-y-1 text-slate-600 dark:text-white/60">
              <p>{contact.info.workingHours.weekdays}</p>
              <p>{contact.info.workingHours.saturday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
