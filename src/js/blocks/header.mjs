import { getUser } from '../functions.mjs'
import { search, credits } from './icons.mjs'
import logo from './logo.mjs'

const user = getUser()

let actionsContent = ``
if (user != null) {
  actionsContent = `
    <span class="credits">${credits}${user.credits}</span>
    <a href="#" class="btn btn-primary new-listing">New Listing</a>
    <div>
        <img id="current-avatar" alt="user profile pic" class="rounded-full object-cover w-10 h-10" src="https://avatars.githubusercontent.com/u/50967213?v=4">
    </div>`
} else {
  actionsContent = ` 
    <a href="login.html" class="btn btn-secondary">Sign in</a>
    <a href="register.html" class="btn btn-primary">Register</a>`
}

// selecting header element
const header = document.querySelector('header')

// insert content into html header
header.innerHTML = `
    <div class="center-content">
        <div class="flex items-center">
            <div class="flex items-center">
                <a class="cursor-pointer"href="#">${logo}</a>
                <div class="search-input-container">
                    <input id="search" class="search-input" placeholder="Search" />
                    <span class="search-icon">${search}</span>
                </div>
            </div>
            <div class="user-actions">
                ${actionsContent}
            </div>
        </div>
    </div>
`
