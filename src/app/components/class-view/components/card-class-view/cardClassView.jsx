import './cardClassView.css';
import ImgGuerreiro from './../../../../../resources/images/Guerreiro.png';
import ImgClerigo from './../../../../../resources/images/Clérigo.png';
import ImgLadino from './../../../../../resources/images/Ladino.png';
import ImgMago from './../../../../../resources/images/Mago.png';
import ImgBarbaro from './../../../../../resources/images/Bárbaro.png';
import ImgElfo from './../../../../../resources/images/Elfo.png';
import ImgAnao from './../../../../../resources/images/Anão.png';
import ImgHalfling from './../../../../../resources/images/Halfling.png';

function loadImagesClasses() {
    let imgClassMap = new Map();
    imgClassMap.set('Guerreiro', ImgGuerreiro);
    imgClassMap.set('Clérigo', ImgClerigo);
    imgClassMap.set('Ladino', ImgLadino);
    imgClassMap.set('Mago', ImgMago);
    imgClassMap.set('Bárbaro', ImgBarbaro);
    imgClassMap.set('Elfo', ImgElfo);
    imgClassMap.set('Anão', ImgAnao);
    imgClassMap.set('Halfling', ImgHalfling);
    return imgClassMap;
}

function CardClassView(props) {
    let pClass = props.data;
    let images = loadImagesClasses();
    return (
        <div className='card'>
            <div className='itemsCard'>
                <h1> { pClass.name } </h1>
                <h3> { pClass.description } </h3>
                <dl>
                    <dt>Vida:</dt>
                    <dd key={ pClass.life.description.toString() }> { pClass.life.description } </dd>
                    <dt>Atributos:</dt>
                    { pClass.attributes.map((pAttribute) => <dd key={ pAttribute.description.toString() }> { pAttribute.description } </dd> ) }
                    <dt>Armas permitidas:</dt>
                    { pClass.armorAllowed.map((pArmor) => <dd key={ pArmor.toString() }> { pArmor } </dd> ) }
                    <dt>Armaduras permitidas:</dt>
                    { pClass.weaponsAllowed.map((pWeapon) => <dd key={ pWeapon.toString() }> { pWeapon } </dd> ) }
                    <dt>Mágicas permitidas:</dt>
                    { pClass.magicsAllowed.map((pMagic) => <dd key={ pMagic.description.toString() }> { pMagic.description } </dd> ) }
                    <dt>Equipamentos iniciais:</dt>
                    <dd key={ pClass.equipmentInitial.toString() }> { pClass.equipmentInitial } </dd>
                    <dt>Riqueza inicial:</dt>
                    <dd key={ pClass.wealthInitial.description.toString() }> { pClass.wealthInitial.description } </dd>
                </dl>
            </div>
            <div>
                <img className='imgClass' src={ images.get(pClass.name.toString()) } alt={ pClass.name.toString() }/>
            </div>
        </div>
    );
}

export default CardClassView;