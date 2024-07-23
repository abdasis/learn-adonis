import GuestLayout from '@/layout/guest'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Link, usePage } from '@inertiajs/react'
import User from '#models/user'
import router from '@adonisjs/core/services/router'
import { Button } from '@/components/ui/button'

export default function UserIndex() {
  const { users } = usePage<{ users: User[] }>().props
  return (
    <GuestLayout>
      <div className="page-body p-10">
        <h1>User Index</h1>
        <Link href={'/users/create'}>
          <Button>Tambah Pengguna</Button>
        </Link>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </GuestLayout>
  )
}
