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

    @Override
    public void exibirConteudo() {
        System.out.println("Java 1.0, Java 5, Java 8, Java 11, Java 17, Java 21...");
    }
}
[27/08, 06:48] .: package museu;

public class Visitante {
    private String nome;
    private int idade;

    public Visitante(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public void explorarSala(Sala sala) {
        System.out.println("\nVisitando: " + sala.nome);
        sala.exibirConteudo();
    }
}
[27/08, 06:48] .: package museu;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Bem-vindo! Digite seu nome: ");
        String nome = sc.nextLine();
        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();

        Visitante visitante = new Visitante(nome, idade);

        Sala[] salas = {
            new SalaFundadores(),
            new SalaVersoes(),
            new SalaCuriosidades()
        };

        int opcao;
        do {
            System.out.println("\n--- Museu da Programação ---");
            for (int i = 0; i < salas.length; i++) {
                System.out.println((i + 1) + ". " + salas[i].nome);
            }
            System.out.println("0. Sair");
            System.out.print("Escolha uma sala para visitar: ");
            opcao = sc.nextInt();

            if (opcao > 0 && opcao <= salas.length) {
                visitante.explorarSala(salas[opcao - 1]);
            }
        } while (opcao != 0);

        System.out.println("Obrigado por visitar o museu, " + nome + "!");
    }
}
[27/08, 06:48] .: Conceitos Aplicados

Abstração & Encapsulamento: Atributos protegidos e classe abstrata Sala.

Herança: SalaFundadores, SalaVersoes, SalaCuriosidades herdam de Sala.

Polimorfismo: exibirConteudo() tem comportamento diferente em cada sala.

Interação via terminal: Menu interativo com Scanner.

💡 Extensões Futuras (Extras)

Sistema de pontos por sala.

Salvar progresso em .txt.

Interface Interativa com quizzes ou vídeos.
