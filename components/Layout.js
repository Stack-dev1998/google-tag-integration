import Topbar from "./Topbar"

function Layout({ children }) {
    return (
      <div>
        <header>
          <Topbar/>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2023 My Website</p>
          {/* other footer stuff */}
        </footer>
      </div>
    )
  }
  
  export default Layout
  