import { Button, Input } from "..";

const FormRegister = () => {
  return (
    <form className="flex flex-col gap-6 mt-5">
      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações pessoais
      </p>
      <Input
        width="w-80"
        labelName="Nome"
        placeholder="Ex: Samuel Leão"
        name="name"
        id="register-name"
      />
      <Input
        width="w-80"
        labelName="Email"
        placeholder="Ex: samuel@kenzie.com.br"
        name="email"
        id="register-email"
      />
      <Input
        width="w-80"
        labelName="CPF"
        placeholder="000.000.000.-00"
        name="cpf"
        id="register-cpf"
      />
      <Input
        width="w-80"
        labelName="Celular"
        placeholder="(DDD) 90000-0000"
        name="cellphone"
        id="register-cell"
      />
      <Input
        width="w-80"
        labelName="Data de nascimento"
        placeholder="00/00/00"
        name="birthdate"
        id="register-birth"
      />
      <Input
        width="w-80"
        labelName="Descrição"
        placeholder="Digitar descrição"
        name="description"
        id="register-desc"
      />

      <p className="font-medium text-sm justify-start cursor-pointer">
        Informações de endereço
      </p>
      <Input
        width="w-80"
        labelName="CEP"
        placeholder="00000-000"
        name="cep"
        id="register-cep"
      />
      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Estado"
          placeholder="Digitar estado"
          name="state"
          id="register-state"
        />
        <Input
          width="w-36"
          labelName="Cidade"
          placeholder="Digitar cidade"
          name="city"
          id="register-city"
        />
      </div>
      <Input
        width="w-80"
        labelName="Rua"
        placeholder="Digitar rua"
        name="street"
        id="register-street"
      />
      <div className="flex gap-2.5">
        <Input
          width="w-36"
          labelName="Número"
          placeholder="Digitar número"
          name="number"
          id="register-number"
        />
        <Input
          width="w-36"
          labelName="Complemento"
          placeholder="Ex: apart 307"
          name="city"
          id="register-city"
        />
      </div>

      <p className="font-medium text-sm justify-start cursor-pointer">
        Tipo de conta
      </p>
      <div className="flex gap-2.5">
        <Button
          type="button"
          style="button-brand"
          disabled={false}
          size="button-medium"
          fullWidth={true}
        >
          Comprador
        </Button>
        <Button
          type="button"
          style="button-grey"
          disabled={false}
          size="button-medium"
          fullWidth={true}
        >
          Anunciante
        </Button>
      </div>

      <Input
        width="w-80"
        labelName="Senha"
        placeholder="Digitar senha"
        name="password"
        id="register-pass"
      />

      <Input
        width="w-80"
        labelName="Confirmar senha"
        placeholder="Confirmar senha"
        name="confirm-pass"
        id="register-confirm"
      />

      <Button
        type="submit"
        style="button-brand"
        disabled={false}
        size="button-medium"
        fullWidth={true}
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default FormRegister;
