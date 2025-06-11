'use client'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';


export default function page(){
      const router = useRouter();
      const { userID: userId } = useParams();

      return(
        <div className=''>
            <h1>Welcome: {userId} </h1>
        </div>
      )
}