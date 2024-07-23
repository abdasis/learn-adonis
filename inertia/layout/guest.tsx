export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'min-h-screen min-w-full bg-slate-50 flex items-center justify-center'}>
      <div className="body-section p-2 w-6/12 bg-white">{children}</div>
    </div>
  )
}
