import React from 'react'
import facebook from "../image/icon-facebook.svg"
import instagram from "../image/icon-instagram.svg"
import pinterest from "../image/icon-pinterest.svg"
import twitter from "../image/icon-twitter.svg"

export default function Footer() {
  return (
    <>
        <footer className="container-fluid bg-dark text-light text-end p-5">
        <div className="footer-box row text-end">
          <article>
            {/* <img src={} alt="" /> */}
          </article>

          <article className="footer-box-1 col-sm">
            <h3 className="">
              Features
            </h3>
            <ul className="">
              <li>
                <button className="">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="">
                  Analytics
                </button>
              </li>
            </ul>
          </article>

          <article className="footer-box-2 col-sm">
            <h3 className="">
              Resources
            </h3>
            <ul>
              <li>
                <button className="">Blog</button>
              </li>
              <li>
                <button className="">
                  Developers
                </button>
              </li>
              <li>
                <button className="">Support</button>
              </li>
            </ul>
          </article>

          <article className="footer-box-3 col-sm">
            <h3 className="">
              Company
            </h3>
            <ul>
              <li>
                <button className="">About</button>
              </li>
              <li>
                <button className="">
                  Our Team
                </button>
              </li>
              <li>
                <button className="">Careers</button>
              </li>
              <li>
                <button className="">Contact</button>
              </li>
            </ul>
          </article>

          <article className="col-sm text-center">
            <ul className="footer-icons row">
              <li className="col col-lg-12">
                <img src={facebook} alt="" />
              </li>
              <li className="col col-lg-12">
                <img src={twitter} alt="" />
              </li>
              <li className="col col-lg-12">
                <img src={pinterest} alt="" />
              </li>
              <li className="col col-lg-12">
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}
