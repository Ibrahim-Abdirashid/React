export const Header = ({title})=>{
return(
    <h1>{title}</h1>
)
}

export const HelloUser = ({name})=>{
    return(
        <>
            <h1>Hello, {name}</h1>

        </>
    )
}

export const UserCard = ({name, email})=>{
return(
    <>
        <p>your name: {name}</p>
        <p>your email: {email}</p>
    </>
)
}

export const ProductCard = ({productName, price})=>{
    return(
        <>
            <p>product Name: {productName}</p>
            <p>price: {price}</p>
        </>
    )
}

export const Footer = ({text})=>{
    return(
        <h1>{text}</h1>
    )
}