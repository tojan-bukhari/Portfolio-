export default function contact() {
    const handleclick=()=>{
        window.open('mailto:tojan333@gmail.com')
    }
    return (
        <div style={{
            width: '600px',
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            borderRadius: '20px',
            padding: '70px',
            paddingTop:'40%',
            textAlign: 'center',
            // boxShadow: '3px 20px 20px black' ,
            margin:'auto',    
            marginTop:'10%',   
        }}
        >
            contact info 
     </div>
    )
}