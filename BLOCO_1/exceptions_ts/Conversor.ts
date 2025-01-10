// tratando o erro
try{
    const resultado = converte(123);

    console.log(resultado);

}catch(error: any){

    if(error instanceof TypeError)
        console.error('\nVocê digitou um numero ao invés de uma string!');
    else
    console.error('\nOcorreu um erro:', error.message);
    
} finally { // finally é opcional
    console.log('\nPrograma encerrado!');
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}