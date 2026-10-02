import { Component } from '@angular/core';
import { Repository } from '../../../types/repository.interface';

@Component({
  imports: [],
  selector: 'app-project',
  styleUrl: './project.css',
  templateUrl: './project.html',
})
export class Project {
  projects: Repository[] = [
    {
      title: 'ActionIn',
      tags: ['.Net 10', 'DDD', 'PostgresSQL'],
      description:
        'Uma rede social para compartilhar o que você está fazendo em tempo real. Inicie uma atividade, e seus amigos poderão ver o que você está fazendo e há quanto tempo — e vice-versa.',
      githubUrl: 'https://github.com/vitormanzano/ActionIn',
    },
    {
      title: 'FitLink',
      tags: ['.Net 8', 'Server Java', 'MongoDB'],
      description:
        'Aplicação para gerenciamento de treinos personalizados e séries, utilizando Web API RESTful para CRUD de usuários e instrutores.',
      githubUrl: 'https://github.com/vitormanzano/FitLink-PI4-Turma2-18',
    },
    {
      title: 'MyExpensesAPI',
      tags: ['.Net 8', 'XUnit', 'Arquitetura limpa'],
      description:
        'Módulo financeiro open-source para gerenciamento de despesas e receitas usando padrões de Unit of Work e repositórios.',
      githubUrl: 'https://github.com/vitormanzano/MyExpensesApi',
    },
    {
      title: 'dotfiles',
      tags: ['nvim', 'hyprland', 'zsh'],
      description: 'Meus arquivos de configuração.',
      githubUrl: 'https://github.com/vitormanzano/dotfiles',
    },
  ];
}
