"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from 'next/link';
import { CreateForm } from '@/components/form';
import { Card1 } from '@/components/card';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DeleteLorem, GetLorem } from '@/actions/createLorem';

const Page = () => {
  // const Loreminfo = [
  //   {
  //     id: '0',
  //     name: 'Hellor'
  //   },
  //   {
  //     id: '1',
  //     name: 'Helloe'
  //   },
  //   {
  //     id: '2',
  //     name: 'Hellos'
  //   },
  //   {
  //     id: '3',
  //     name: 'Hellow'
  //   },
  // ]
  const [data, setData] = useState<any>()
  useEffect(() => {
    GetLorem()
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [data])

  const handleDelete = useCallback((id: string) => {
    DeleteLorem(id)
  }, []);

  return (
    <div className='flex flex-col bg-yellow-100 w-full h-screen'>
      <div className='grid grid-cols-3 justify-items-center mt-10'>
        <div className='border border-black  h-[100px] w-[200px] bg-green-200 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>03</div>
        </div>
        <div className='border border-black  h-[100px] w-[200px] bg-pink-400 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>11</div>
        </div>
        <div className='border border-black h-[100px] w-[200px] bg-orange-300 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>52</div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center mt-10'>
        <CreateForm />
        {/* <Input className=' w-[1200px] h-[50px]' placeholder='Enter Something here' />
        <Button className='ml-4 h-[50px] w-[150px]'>Create</Button> */}
      </div>
      <div className='flex flex-col mt-5 ml-[500px] gap-y-5 w-[900px] h-[250px] rounded-2xl'>
        {
          data?.map((Lorems: any, index: number) => {
            return (
              <Card key={index}>
                <CardContent>
                  {Lorems.name}
                </CardContent>
                <CardFooter className='flex justify-between items-center'>
                  <Button variant='destructive'>click me</Button>
                  <Button variant={'ghost'} onClick={() => handleDelete(Lorems.id)}>
                    <RiDeleteBin6Line className='w-8 h-8' />
                  </Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Page 
