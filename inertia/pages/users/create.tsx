import GuestLayout from '@/layout/guest'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function UserCreate() {
  const { data, setData, post, processing } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post('/users')
  }

  return (
    <GuestLayout>
      <div className="page-body p-10">
        <h1>User Create</h1>
        <form onSubmit={submit}>
          <div className="form-group mb-2">
            <Label htmlFor="name">Name</Label>
            <Input
              name={'name'}
              placeholder={'Masukan Nama Lengkap'}
              onChange={(e) => setData('name', e.target.value)}
              value={data.name}
            />
          </div>
          <div className="form-group mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name={'email'}
              placeholder={'Masukan Email'}
              onChange={(e) => setData('email', e.target.value)}
              value={data.email}
            />
          </div>
          <div className="form-group mb-2">
            <Label htmlFor="password">Password</Label>
            <Input
              name={'password'}
              placeholder={'Masukan Email'}
              onChange={(e) => setData('password', e.target.value)}
              value={data.password}
            />
          </div>
          <div className="form-group mb-2">
            <Button disabled={processing}>Simpan</Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  )
}
