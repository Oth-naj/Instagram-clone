import React from 'react'

export default function Footer() {
    return (
        <div className='footer_items text-body-tertiary'>
            <div className="first_item d-flex mb-3">
                <a className='ms-2' href="#">About</a>
                <a className='ms-2' href="#">Help</a>
                <a className='ms-2' href="#">API</a>
                <a className='ms-2' href="#">Privacy</a>
                <a className='ms-2' href="#">Terms & Condition</a>
            </div>
            <div className="second_item d-flex mb-4">
                <a className='ms-2' href="#">Top Accounts</a>
                <a className='ms-2' href="#">Hashtags</a>
                <a className='ms-2' href="#">Language</a>
            </div>

            <div className="copy_rights">
                <p>&copy; INSTAGRAM powerd by OTHMAN</p>
            </div>
        </div>
    )
}
