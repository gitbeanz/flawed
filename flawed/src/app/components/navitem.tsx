import Link from "next/link";

type NavProps = {
    text : string;
    href : string;
    active : boolean;
}

const NavItem = (props: NavProps)=>{
    return(
        <Link href={props.href} legacyBehavior>
            <a className={`nav__item ${ props.active ? "active" : ""}`}>{props.text}</a>
        </Link>
    );
};

export default NavItem;