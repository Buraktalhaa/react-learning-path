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

    return (
        <>
            <div>Div bilgisi</div>
            <h2>Hello {userName} {2+2}</h2>

            {/* 4 Gosterim Sekli 1*/}
            <ul className="bg-red">
                {users.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>

            {/* Gosterim sekli 2*/}
            <ul className="bg-red">
                {users.map(item => {
                   return <li key={item}>{item}</li>
                })}
            </ul>

            {/* Gosterim Sekli 3 */}
            <ul style={{backgroundColor: 'bisque'}}>
                {mapUsers}
            </ul>

            {/*  */}
            <ul style={{backgroundColor: 'yellow', listStyle: "none"}}>
                {mapUsers}
            </ul>
        </>
    )
}