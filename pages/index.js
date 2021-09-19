import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to Listen!
        </h1>

        <p className="subTitle">
          Get started by choosing an option below:
        </p>
        <div className="section">
          <div className="grid">
            <a href="/what" className="gridItem">
              <p className="buttonLabel">Need to Talk</p>
            </a>

            <a href="/listener" className="gridItem">
              <p className="buttonLabel">Ready to Listen</p>
              <p></p>
            </a>
        </div>
        </div>
      </main>

      <footer>
        <p classname="footerText">
          Built by harryh, henryrh, and mk314k {' '}
        </p>
      </footer >

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          position: fixed;
          bottom: 0;
          border-top: 4px solid #eaeaea;
          justify-content: center;
          align-items: center;
          text=align: center;
          padding-left: 425px;
        }

      `}</style>
    </div>
  )
}
