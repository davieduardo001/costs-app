import React from 'react'
import style from './ProjectForm.module.css'
import Input from './Form/Input'
import Select from './Form/Select'
import SubmitButton from './Form/SubmitButton'

const ProjectFrom = ({ btnText }) => {
    return (
        <form action="" className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
            />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectFrom