import '../adminhome.css';
// import Insert from './insert/insert';
// import Update from './update/update';
// import View from './view/view';
// import Password from './password/password';
import admin_pic from '../../../batman.png';
const Insert=()=>{
    return(
        <div>
            <div className="Header">
                <section>Super-Market Database</section>
                <section><img src={admin_pic} alt="admin_pic" width="80px"></img></section>
            </div>
            <div className="Content">
                <div className="admin_nav">
                    <button>Insert</button><br></br>
                    <button>Update</button><br></br>
                    <button>View</button><br></br>
                    <button>Password Reset</button>
                </div>
                <div className="content_display">
                    
                </div>
            </div>
            <footer className="Footer">
            Footer
            </footer>
        </div>
    )
}


export default Insert;