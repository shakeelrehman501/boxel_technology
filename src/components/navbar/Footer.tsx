"use client"
import {useState} from "react"

import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaTiktok } from "react-icons/fa";
import MyButton from '@/components/MyComponents/MyButton'
import { navItems } from "@/lib/data/servicePageData";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Link from "next/link"

function Footer() {
  const [activeSection, setActiveSection] = useState('')
  return (
    <footer className="w-full">
     <AnimatedSection className="mt-20 w-full max-w-100 min-w-70 mx-auto  px-5 py-10 space-y-10 ">
    <div className="space-y-10">
        <AnimatedItem type="slideDown" index={0}>
        <ul className='flex justify-center gap-10 flex-wrap text-secondary dark:text-secondary-foreground'>
            {navItems.map((item)=>(
                <li key={item.id}
                >
                <Link href={item.id}>
                  <button className={`${activeSection === item.id ? "text-secondary/70 dark:text-secondary-foreground/70" : ""} cursor-pointer text-secondary dark:text-secondary-foreground`}       
                  onClick={()=>setActiveSection(item.id)}>
                    {item.label}
                  </button>
                </Link>
                </li>
            ))}
        </ul>
        </AnimatedItem>
        <div className=' w-full'>
          <div className="flex justify-center items-center gap-5">
            <a href="https://www.linkedin.com/company/boxeltechnology/">
            <AnimatedItem type="slideUp" index={1}>
              <MyButton variant='solidIcon' >
                 <FiLinkedin className="w-7 h-7"/>
              </MyButton>
             </AnimatedItem>
            </a>
            <a href="https://www.instagram.com/boxeltechnology">
              <AnimatedItem type="slideUp" index={2}>
              <MyButton variant='solidIcon' >
                 <FiInstagram className="w-7 h-7"/>
              </MyButton>
             </AnimatedItem>
            </a>
            <a href="https://www.facebook.com/boxeltechnology">
             <AnimatedItem type="slideUp" index={3}>
             <MyButton variant='solidIcon' >
                 <FiFacebook className="w-7 h-7"/>
              </MyButton>
             </AnimatedItem>
            </a>
              <a href="https://x.com/boxeltechnology">
             <AnimatedItem type="slideUp" index={4}>
              <MyButton variant='solidIcon' >
                 <FiTwitter className="w-7 h-7"/>
              </MyButton>
             </AnimatedItem>
              </a>
            
             
          </div>
        </div>
          <AnimatedItem type="slideUp" index={1}>
            <h1 className='text-secondary/70 dark:text-secondary-foreground/70 text-center'>© 2026 Boxel Technology. All Rights Reserved.</h1>
          </AnimatedItem>    
    </div>
    </AnimatedSection> 
    </footer>
  )
}

export default Footer
