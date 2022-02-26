import './classView.css';
import CardClassView from './components/card-class-view/cardClassView';
import ClassModel from './../../../models/classModel';
import ClassData from './../../../models/data/classes.json';

function ClassView() {
    let vClasses = [];
    vClasses = ClassData.map((pData) => {
        let vClass = new ClassModel();
        vClass.loadData(pData);
        return vClass;
    });

    return (
        <div className='panel'>
            { vClasses.map((pClass) => <CardClassView key={ pClass.name.toString() } data={ pClass }/> ) }
        </div>
    );
}

export default ClassView;