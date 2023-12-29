import showcaseimg from '../image/showcaseimg.png'

export default function Showcase() {
  return (

    <>
      <section className="container p-5">
        <div className="showcase row align-items-center">
          <article className="col-lg order-sm-2">
            <img src={showcaseimg} className="showcaseimg" alt="Shortly" style={{height:"25rem"}}/>
          </article>

          <article className="text-center col-lg order-sm-1">
            <h1 className="display-3 mb-5">
              <strong>More than just shorter links</strong>
            </h1>
            <p className="showcase-para">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="showcasebtn mt-4" id="getstarted" style={{background:"hsl(180, 66%, 49%)",color:"white",width:"8rem",borderRadius:"20px",height:"2.5rem"}}>Get Started</button>
          </article>

          
        </div>
      </section>

    </>
  )
}
