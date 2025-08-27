[27/08, 06:47] .: MuseuJava/
├── src/
│ └── museu/
│ ├── Main.java
│ ├── Visitante.java
│ ├── Sala.java
│ ├── SalaFundadores.java
│ ├── SalaVersoes.java
│ ├── SalaCuriosidades.java
│ └── Interativa.java
[27/08, 06:47] .: package museu;

public abstract class Sala {
    protected String nome;
    protected String descricao;
    protected int anoCriacao;

    public Sala(String nome, String descricao, int anoCriacao) {
        this.nome = nome;
        this.descricao = descricao;
        this.anoCriacao = anoCriacao;
    }

    public abstract void exibirConteudo();
}
[27/08, 06:47] .: package museu;

public class SalaFundadores extends Sala {
    public SalaFundadores() {
        super("Sala dos Fundadores", "Sobre James Gosling e a Sun Microsystems.", 1995);
    }

    @Override
    public void exibirConteudo() {
        System.out.println("James Gosling criou o Java na Sun Microsystems em 1995.");
    }
}
[27/08, 06:47] .: package museu;

public class SalaVersoes extends Sala {
    public SalaVersoes() {
        super("Sala das Versões", "Principais versões do Java.", 1996);
    } 

