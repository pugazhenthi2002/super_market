import '../adminhome.css';
import './view.css';
import Display from './item_display';
// import Insert from './insert/insert';
// import Update from './update/update';
// import View from './view/view';
// import Password from './password/password';
import admin_pic from '../../../batman.png';
const View=(para)=>{
    const items=para.items_list;
    // console.log(items);
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
                {items.map((x)=>
                    <Display
                    item_name = {x.item_name}
                    cost = {x.cost}
                    stocks = {x.stocks}/>
                )}
                </div>
            </div>
            <footer className="Footer">
            Footer
            </footer>
            Hello
        </div>
    )
}


export default View;