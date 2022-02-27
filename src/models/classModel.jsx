class classModel {
    constructor() {
        this.name = "";
        this.description = "";
        this.life = {
            description: "",
            role: ""
        };
        this.equipmentInitial = "";
        this.attributes = [{
            description: "",
            role: ""
        }];
        this.armorAllowed = [];
        this.weaponsAllowed = [];
        this.wealthInitial = {
            description: "",
            role: ""
        };
        this.magicsAllowed = [{
            description: "",
            magic: "",
            limit: "",
            role: ""
        }];
    }

    loadData(pData) {
        this.name = pData.name;
        this.description = pData.description;
        this.life = pData.life;
        this.equipmentInitial = pData.equipmentInitial;
        this.attributes = pData.attributes;
        this.armorAllowed = pData.armorAllowed;
        this.weaponsAllowed = pData.weaponsAllowed;
        this.wealthInitial = pData.wealthInitial;
        this.magicsAllowed = pData.magicsAllowed;
    }
}

export default classModel;