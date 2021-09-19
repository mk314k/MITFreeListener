import Head from 'next/head'


export default function What() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          What do you want to talk about?
        </h1>

        <p className="subTitle">
          Choose an option below:
        </p>
        <div className="section">
            <div className="grid">
            <a href="/who?type=Academics" className="gridItem">
                <p className="buttonLabel">Academics</p>
            </a>

            <a href="/who?type=Professional" className="gridItem">
                <p className="buttonLabel">Professional</p>
                <p></p>
            </a>
            </div>

            <div className="grid">
            <a href="/who?type=Mental" className="gridItem">
                <p className="buttonLabel">Mental Health</p>
            </a>

            <a href="/who?type=Social" className="gridItem">
                <p className="buttonLabel">Social</p>
                <p></p>
            </a>
            </div>
    
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
            height: 20px;
            position: fixed;
            bottom: 20px;
            justify-content: center;
            align-items: center;
            text=align: center;
            padding-left: 425px;
        }

      `}</style>
    </div>
  )
}
