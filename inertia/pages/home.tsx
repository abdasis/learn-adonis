import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button';

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>
        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
        <Button>Contoh Pakain Shadcn</Button>
      </div>
    </>
  )
}
