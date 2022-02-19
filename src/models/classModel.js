export class classModel {
    constructor() {
        this.name = "";
        this.life = {};
        this.equipmentInitial = "";
        this.attributes = [];
        this.armorAllowed = [];
        this.weaponsAllowed = [];
        this.wealthInitial = [];
        this.magicsAllowed = [];
    }

    loadData(pClassData) {
        this.name = pClassData.name;
        this.life = pClassData.life;
        this.equipmentInitial = pClassData.equipmentInitial;
        this.attributes = pClassData.attributes;
        this.armorAllowed = pClassData.armorAllowed;
        this.weaponsAllowed = pClassData.weaponsAllowed;
        this.wealthInitial = pClassData.wealthInitial;
        this.magicsAllowed = pClassData.magicsAllowed;
    }
}