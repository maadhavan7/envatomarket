import '../src/Allstyle.css'
import '../src/style.css'
import '../src/css2.css'
import img1 from'../src/img/bg-img/9.jpg'
import img2 from'../src/img/bg-img/10.jpg'
import img3 from'../src/img/bg-img/11.jpg'
import img4 from'../src/img/bg-img/12.jpg'
import img5 from'../src/img/core-img/fire.png'
import img6 from'../src/img/core-img/logo-white.png'
import img7 from'../src/img/core-img/logo.png'
import img8 from '../src/img/bg-img/u1.jpg'
import img9 from '../src/img/bg-img/u2.jpg'
import img10 from '../src/img/bg-img/u3.jpg'
import img11 from '../src/img/bg-img/u4.jpg'
import img12 from '../src/img/core-img/favicon.ico'
const Header=()=>{
    return(<>
        <div className="header-area">
             <title>Funto - HTML NFT Marketplace</title>
    <link rel="shortcut icon" href={img12} type="image/x-icon"></link>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="index.html"><img className="light-logo" src={img6} alt="img7"/><img className="dark-logo" src={img6} alt="img6"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid"></i></button>
                <div className="collapse navbar-collapse" id="funtoNav">
                    <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
                        <li className="ft-dd"><a href="#">Home</a>
                            <ul className="ft-dd-menu">
                                <li><a href="home-1.html">Home Variation 1</a></li>
                                <li><a href="home-2.html">Home Variation 2</a></li>
                            </ul>
                        </li>
                        <li className="ft-dd"><a href="#">Explore</a>
                            <ul className="ft-dd-menu">
                                <li><a href="explore-1.html">Explore 1</a></li>
                                <li><a href="explore-2.html">Explore 2</a></li>
                                <li><a href="featured-items.html">Featured Drops</a></li>
                                <li><a href="live-bidding.html">Live Auctions</a></li>
                                <li><a href="collections.html">Collections</a></li>
                                <li><a href="top-seller.html">Top Seller</a></li>
                                <li><a href="top-buyer.html">Top Buyer</a></li>
                                <li><a href="item-details.html">Item Details</a></li>
                            </ul>
                        </li>
                        <li className="ft-dd"><a href="#">Admin</a>
                            <ul className="ft-dd-menu">
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="live-bids.html">Live Bids</a></li>
                                <li><a href="my-collection.html">My Collection</a></li>
                                <li><a href="my-wallet.html">My Wallet</a></li>
                                <li><a href="notifications.html">Notifications</a></li>
                                <li><a href="settings.html">Settings</a></li>
                            </ul>
                        </li>
                        <li className="ft-dd"><a href="#">Pages</a>
                            <ul className="ft-dd-menu">
                                <li><a href="activity.html">Activity</a></li>
                                <li><a href="ranking.html">Ranking</a></li>
                                <li><a href="create-new.html">Create New Items</a></li>
                                <li><a href="connet-wallet.html">Connect Wallet</a></li>
                                <li><a href="author.html">Author Profile</a></li>
                                <li className="ft-dd"><a href="#">Authentification</a>
                                    <ul className="ft-dd-menu">
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="forget-password.html">Forget Password</a></li>
                                    </ul>
                                </li>
                                <li className="ft-dd"><a href="#">Blog</a>
                                    <ul className="ft-dd-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="ft-dd"><a href="#">Others</a>
                                    <ul className="ft-dd-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="newsletter.html">Newsletter</a></li>
                                        <li><a href="privacy.html">Privacy Policy</a></li>
                                        <li><a href="terms.html">Terms</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                                <li className="ft-dd"><a href="#">Help Center</a>
                                    <ul className="ft-dd-menu">
                                        <li><a href="help-center.html">Help Home</a></li>
                                        <li><a href="help-questions.html">All Questions</a></li>
                                        <li><a href="question-details.html">Question Details</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="help-center.html">Help Center</a></li>
                    </ul>
                   
                    <div className="header-meta d-flex align-items-center ms-lg-auto">
                        
                        <div className="search-form position-relative d-flex align-items-center">
                            <input className="form-control" type="text" placeholder="Search"/>
                            <button className="position-absolute" type="submit"><i className="bi bi-search"></i></button>
                        </div>
                       
                        {/* <div className="user-dropdown dropdown mx-3">
                            <button className="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots"></i>
                            <ul clasName="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="dashboard.html"><i className="me-2 bi bi-speedometer2"></i>Dashboard</a></li>
                                <li><a className="dropdown-item" href="my-collection.html"><i className="me-2 bi bi-collection"></i>Collections</a></li>
                                <li><a className="dropdown-item" href="notifications.html"><i className="me-2 bi bi-bell"></i>Notifications</a></li>
                                <li><a className="dropdown-item" href="settings.html"><i className="me-2 bi bi-gear"></i>Settings</a></li>
                            </ul>
                            </button>
                        </div> */}
                        <a className="btn btn-warning btn-sm rounded-pill" href="create-new.html">Create</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div className="breadcrumb-wrapper">
        <div className="container">
            <div className="breadcrumb-content">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-danger me-1" role="status"><span className="visually-hidden">Loading...</span></div>
                    <h2 className="breadcrumb-title mb-0">Live Bids</h2>
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Live Bids</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>

     
         <div className="divider"></div>
    <div className="live-bids-wrapper">
        <div className="container">
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img1} alt="img1"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowne22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowne22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="March 31, 2022 14:19:54">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>3 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img11} alt="img11"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img2} alt="img2"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown422" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown422">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>11 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img8} alt="img8"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@creative_world</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img3} alt="img3"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Bid Done</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown922" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown922">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="Feb 28, 2022 12:34:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>Not available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img9} alt="img9"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img4} alt="img4"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Hot Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowne3222" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowne3222">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>29 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img10} alt="img10"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_nft</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img1} alt="img1"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownty22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownty22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="March 31, 2022 14:19:54">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>3 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img11} alt="img11"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img2} alt="img2"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownx22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>11 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img8} alt="img8"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@creative_world</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img3} alt="img3"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Bid Done</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownxx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownxx22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="Feb 28, 2022 12:34:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>Not available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img9} alt="img9"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img4} alt="img4"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Hot Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowngg22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowngg22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>29 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img10} alt="img10"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_nft</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img1} alt="img1"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownhh22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownhh22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="March 31, 2022 14:19:54">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>3 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img11} alt="img11"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img2} alt="img2"/>
                                <div className="badge bg-dark position-absolute"><img src={img5} alt="img5"/>New Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownww22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownww22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>11 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn active" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img8} alt="img8"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@creative_world</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img3} alt="img3"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Bid Done</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownaa22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownaa22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="Feb 28, 2022 12:34:00">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>Not available</span></div>
                                <div className="col-4 text-end">
                                    <button class="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img9} alt="img9"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_car</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div className="nft-card card shadow-sm">
                        <div className="card-body">
                            <div className="img-wrap"><img src={img4} alt="img4"/>
                                <div className="badge bg-danger position-absolute"><img src={img5} alt="img5"/>Hot Bid</div>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowngh22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowngh22">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-share"></i>Share</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-flag"></i>Report</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="me-1 bi bi-bookmark"></i>Bookmark</a></li>
                                    </ul>
                                </div>
                                <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                                    <div><span className="days"></span><span>Days</span></div>
                                    <div><span className="hours"></span><span>Hours</span></div>
                                    <div><span className="minutes"></span><span>Min</span></div>
                                    <div><span className="seconds"></span><span>Sec</span></div>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1"></i>29 stock available</span></div>
                                <div className="col-4 text-end">
                                    <button className="wishlist-btn" type="button"><i className="bi"></i></button>
                                </div>
                            </div>
                            <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                    <div className="name-info d-flex align-items-center">
                                        <div className="author-img position-relative"><img className="shadow" src={img10} alt="img10"/><i className="bi bi-check position-absolute bg-success"></i></div>
                                        <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate"
                                                href="author.html">@fancy_nft</a></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                        <h6 className="mb-0">0.784 ETH</h6>
                                    </div>
                                </div>
                                <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="#">Place Bid</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="#">Load more<i className="ms-1 bi bi-arrow-repeat"></i></a></div>
        </div>
    </div>
    <div className="divider"></div>
    <div className="dark-light-wrapper" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="200">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0 text-white" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Light mode is available!</h5>
                <div className="dark-light-mode" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
                    <input id="darkLightSwitch" type="checkbox"/>
                    <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Header