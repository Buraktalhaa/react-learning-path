// rules
// 1: Html yapisi return etmen gerekiyor.
// 2: return ile sadece bir parent element gonderebilirsin
// 2.1: fragment kullanilabilir
// 3: class bilgisi className diye Yazilmali..
// 4: return icinde aciklama icin yine susluParantez Kullanilmali {/* aciklama.. */}
// 5: style bilgisi {js icinde {obj olcak sekilde olmalidir}}

import { ButtonComponent } from "./components/Button"
import { Card, ChildrenCard } from "./components/Card"
import { ConditionalRenderedUserList } from "./components/ConditionalRenderedUserList"
import { IMAGES, ImgThumbnail } from "./components/ImgThumbnail"
import { ITEMS, UserList } from "./components/UserList"

// export default verdigimiz icin componentden gelen fonksiyonun adini burada degistirebiliriz
import PcNamesss from "./components/UserList"
import { INFO } from "./data/info"

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



            {/*  */}
            <UserList></UserList>
            {ITEMS.map((item, index) =>
                <span key={index}>{item}</span>
            )}


            {/* 10 tane component cagirma isi */}
            {[...Array(10)].map((item, index) => <UserList key={index}></UserList>)}


            {/* export default kullanimi */}
            <PcNamesss></PcNamesss>

            <ButtonComponent className="btn btn-primary" info="1"></ButtonComponent>


            {/* Fonksiyon olarak gonderme  */}
            <ImgThumbnail imgSrc="https://picsum.photos/id/239/600/300" />

            {/* Topku fotolari gostermelk icin */}

            {IMAGES.map((item, index) => <ImgThumbnail key={index} imgSrc={item}></ImgThumbnail>)}






            <hr />
            <Card imgSrc="https://picsum.photos/id/239/600/300" imgAlt="Foto deneme" title="Burak" />





            <hr />
            {/* Children kullanimi */}
            <ChildrenCard
                imgSrc="https://picsum.photos/id/240/600/300"
                imgAlt="Foto deneme"
                title="Talha"
                dataId="121">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Vel unde deserunt aliquam nam!</p>
                <p>Nemo asperiores vitae in dolorem.</p>
            </ ChildrenCard>



            <hr />
            {/* Conditional Rendering */}
            <ConditionalRenderedUserList isActive={false}></ConditionalRenderedUserList>

            <h2>Optional Chaining</h2>
            { INFO.products?.map((product, index) => <li key={index}>{product}</li>)}
        </>
    )
}