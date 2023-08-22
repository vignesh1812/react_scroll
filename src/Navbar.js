import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import {Link} from 'react-scroll';1

const Navbar = () => {
    return (
        <div className='spnavbar'>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <h6 className="navbar-brand">
                    <HashLink smooth to='/#home'className='links' >Techvox</HashLink>
                    </h6>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item mx-5">
                                <HashLink className='links' smooth to='/#home'>Home</HashLink>
                            {/* <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}> */}
          {/* Home */}
        {/* </Link> */}
                            </li>
                            <li class="nav-item mx-5">
                            {/* <Link className="text-decoration-none text-dark" to="/career" >Career</Link> */}
                            <HashLink className='links' smooth to='/#career'>Career</HashLink>
                            </li>
                            <li class="nav-item mx-5">
                            {/* <Link className="text-decoration-none text-dark" to="/about" >About</Link> */}
                            <HashLink className='links' smooth to='/#about'>About</HashLink>
                            </li>
                            <li class="nav-item mx-5">
                            {/* <Link  className="text-decoration-none text-dark" to="/contact" >Contact</Link> */}
                            <HashLink className='links' smooth to='/#contact'>Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar