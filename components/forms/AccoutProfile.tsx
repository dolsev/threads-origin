"use client"
import {Form} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

interface Props {
    user:{
        id: string;
        objectId: string;
        name: string;
        bio:string;
        image:string;
    }
    btnTitle: string;
}

const AccountProfile = ({user, btnTitle}) =>{
    const form = useForm({resolver:zodResolver()})
    return (
        <Form>
            Account Profile
        </Form>
    )
}
export default AccountProfile