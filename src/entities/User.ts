//realizando o import para sinalizar a class como uma entity e as colunas da tabela
import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

// importando framework para gerar chaves dos id
import { v4 as uuid} from "uuid";

//referenciado qual tabela essa entidade irá manipular
@Entity("users")
class User {

    @PrimaryColumn()
    readonly id:string;
    //sinalizando que esse atributo so poderá ser lido e apenas essa entidade pode inserir algum valor nesse atributo'

    @Column() // só e necessario passa algum parametro, se caso na entidade o nome do atributo ser diferente da tabela do banco Ex.: @column("name") nameUser: string
    name: string;

    @Column()
    email: string;

    @Column()
    admin:boolean;
    
    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor(){
        //checando se e uma criação de um novo user ou não
        if(!this.id){
            this.id = uuid();
        }

    }
}


//exportando entidade
export { User};
