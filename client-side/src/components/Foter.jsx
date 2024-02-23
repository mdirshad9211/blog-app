import {Footer} from "flowbite-react"
import { Link } from "react-router-dom"
export default function Foter() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md: grid-cols-1">
            <div className="mt-5">
            <Link to={"/"} className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark: text-black">
              <span  className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"> Dev</span>
              Blogs
            </Link>
            </div>
            <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="https://perfectnotes.in/" target="_blank" rel="noopener noreferrer">Perfect Notes</Footer.Link>
                  <Footer.Link href="https://leetcode.com/itsmdirshad/" target="_blank" rel="noopener noreferrer">Leetcode</Footer.Link>
                  <Footer.Link href="https://www.hackerrank.com/profile/irshadidrisi9211" target="_blank" rel="noopener noreferrer">HackerRank</Footer.Link>
              </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.linkedin.com/in/itsmdirshad/" target="_blank" rel="noopener noreferrer">LinkedIn</Footer.Link>
                  <Footer.Link href="https://github.com/mdirshad9211" target="_blank" rel="noopener noreferrer">GitHub</Footer.Link>
                  <Footer.Link href="https://www.instagram.com/its.mdirshad/" target="_blank" rel="noopener noreferrer">Instagram</Footer.Link>
              </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider/>
          <div className="w-full sm:flex sm:items-center sm:justify-center">
            <Footer.Copyright href="#" by="Dev       Blogs" year={new Date().getFullYear()}/>
          </div>
        </div>
    </Footer>
  )
}
