// rules
// 1: Html yapisi return etmen gerekiyor.
// 2: return ile sadece bir parent element gonderebilirsin
// 2.1: fragment kullanilabilir
// 3: class bilgisi className diye Yazilmali..
// 4: return icinde aciklama icin yine susluParantez Kullanilmali {/* aciklama.. */}
// 5: style bilgisi {js icinde {obj olcak sekilde olmalidir}}

export default function App() {
    const userName = "Burak"
    const users = ['Burak', 'Talha', 'Memis']
    const mapUsers = users.map((item, index) => <li key={index}>{item}</li>)
    const isActive = true

    const products = [
        { id: 1, name: "MacBook Pro 14", inStock: false },
        { id: 2, name: "MacBook Pro 13", inStock: true },
        { id: 3, name: "iPad", inStock: false },
        { id: 4, name: "Lenovo 14", inStock: true },
        { id: 5, name: "Dell", inStock: true },
    ]

    return (
        <>
            <div>Div bilgisi</div>
            <h2>Hello {userName} {2 + 2}</h2>

            {/* 4 Gosterim Sekli 1*/}
            < ul className="bg-red" >
                {
                    users.map((item, index) =>
                        <li key={index}>{item}</li>
                    )
                }
            </ul >

            {/* Gosterim sekli 2*/}
            < ul style={{ backgroundColor: `${isActive ? "green" : "blue"}` }
            }>
                {
                    users.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul >

            {/* Gosterim Sekli 3 */}
            < ul style={{ backgroundColor: 'bisque' }}>
                {mapUsers}
            </ul >

            {/*  */}
            < ul style={{ backgroundColor: 'yellow', listStyle: "none" }}>
                {mapUsers}
            </ul >

            {/* Onemli */}
            <ul>
                {products
                    .filter(item => item.inStock)
                    .map(item =>
                        <li key={item.id}>{item.name}</li>
                    )}
            </ul>
            
            <ImgThumbnail />
        </>
    )
}

// Bu sekilde yazarak birden fazla yerde kullanabiliriz
// function buyuk harfle baslamali
function ImgThumbnail () {
    return <img src="https://picsum.photos/id/237/600/250" alt="" style={{padding: "4px", border:"1px solid #bdc3c7", borderRadius: "8px"}}/>
}