import { useEffect } from "react";
import SlideShow from "./Carousel";
import SwiperSlideshow from "./Carousel";

const Header = ({logoutUser}) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id = "navbar">
        <div class="container-fluid" >
          <a class="navbar-brand" id = "header" href="#">
            Gozai<span id = "store">Store</span>
          </a>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div id = "icons">
            <div id = "fav">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            </div>
            <div id = "user-icon">
            <svg id = "user-icon-svg" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg><UserPopup handleClick = {logoutUser}/>
            </div>
            <div id = "cart">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/></svg>            
            </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

const UserPopup = ({handleClick}) => {

  return (
    <div id = "popup">
      <div id = "logout-container">
       <svg width = "20px" height="20px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.95 15.84h-11V.17h11v3.88h-1V1.17h-9v13.67h9v-2.83h1v3.83z"/><path d="M5 8h6v1H5zM11 5.96l4.4 2.54-4.4 2.54V5.96z"/></svg>
        <a href="" onClick={handleClick}>Log out</a>
      </div>
    </div>
  )
}

const Home = ({logoutUser}) => {


  useEffect(() => {

    const user = document.querySelector("#user-icon-svg")
    const popup = document.querySelector("#popup")

    user.addEventListener("mouseover",() => {
       popup.style.display = "block"
    })

    popup.addEventListener("mouseover",() => {
      popup.style.display = "block"
    })

    user.addEventListener("mouseout",() => {
      popup.style.display = "none"
    })

    popup.addEventListener("mouseout",() => {
      popup.style.display = "none"
    })
  })


    return (
        <>
        <Header logoutUser = {logoutUser} />
        <SwiperSlideshow />
        </>
    )
}

export default Home;