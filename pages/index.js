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

        <div className="grid">
          <a href="/listen" className="gridItem">
            <p className="buttonLabel">Need to Talk</p>
          </a>

          <a href="/listener" className="gridItem">
            <p className="buttonLabel">Ready to Listen</p>
            <p></p>
          </a>

        </div>
      </main>

      <footer>
          Built by harryh, henryrh, and mk314k {' '}
      </footer>

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
          position: absolute;
          bottom: 0;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </div>
  )
}
