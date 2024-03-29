import{Sidebar} from 'flowbite-react';
import { FaUser,FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';


export default function DashSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get('tab');
    if(tabFromURL){
      setTab(tabFromURL);
    }
  },[location.search]);
  return (
    <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to = '/dashboard?tab=profile'>
                    <Sidebar.Item active = {tab === 'profile'} icon={FaUser} label = {"User"} labelColor='dark'>
                        Profile
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item  icon={FaArrowRight} className="cursor-pointer">
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
