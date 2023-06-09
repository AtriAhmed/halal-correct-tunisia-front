import { ChatBubbleLeftRightIcon, ExclamationTriangleIcon, InformationCircleIcon, ListBulletIcon, MapPinIcon, PlusIcon, QuestionMarkCircleIcon, TagIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'
import React from 'react'
import { useAuthContext } from '../../contexts/AuthProvider'

export default function Home() {
  const { user, setUser } = useAuthContext()
  return (
    <div className='max-w-7xl mx-auto pt-5'>
      <div className='grid grid-cols-12 gap-4'>
        {user.role_as == 1 ? <>
          <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/users'><UsersIcon className="block h-10 w-10 flex-start" aria-hidden="true" /> Users</Link>
          <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/users-requests'><UserPlusIcon className="block h-10 w-10 flex-start" aria-hidden="true" /> Users Requests</Link>
          <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/categories'><TagIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Categories</Link>
          <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/products'> <ListBulletIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Products</Link>
          <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/locations'><MapPinIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Locations</Link>
        </> : <></>}
        <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/applies'><PlusIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Applies</Link>
        <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/checks'><QuestionMarkCircleIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Checks</Link>
        <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/feedbacks'><ChatBubbleLeftRightIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Feedbacks</Link>
        <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/complaints'><ExclamationTriangleIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Complaints</Link>
        <Link className='col-span-4 shadow-lg rounded-lg p-6 flex flex-col items-center justify-center' to='/admin/questions'><InformationCircleIcon className="block h-10 w-10 flex-start" aria-hidden="true" />Questions</Link>

      </div>
    </div>
  )
}
