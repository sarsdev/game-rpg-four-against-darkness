function PlayerSheetView() {
    return(
        <div>
            <form action="#">
                <label>Nome</label>
                <input type="text" name="name"/>
                <label>Nível</label>
                <input type="text" name="level"/>
                <label>PO</label>
                <input type="text" name="wealth"/>
                <label>Tipo</label>
                <input type="text" name="type"/>
                <label>Vida</label>
                <input type="text" name="life"/>
                <label>Ataque</label>
                <input type="text" name="attach"/>
                <label>Defesa</label>
                <input type="text" name="defense"/>
                <label>Habilidades</label>
                <input type="text" name="skills"/>
                <label>Pistas</label>
                <input type="text" name="clues"/>
                <label>Equipamentos</label>
                <input type="text" name="equipments"/>
            </form>
        </div>
    );
}

export default PlayerSheetView;