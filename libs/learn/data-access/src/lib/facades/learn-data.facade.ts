import {
  LearnRepository,
  CreateLearnUseCase,
  FindLearnByUseCase,
  RemoveLearnUseCase,
  UpdateLearnUseCase,
  FindAllLearnsUseCase,
} from '@cdn-school/learn/domain';

export class LearnDataFacade {
  createUseCase: CreateLearnUseCase;
  findLearnByUseCase: FindLearnByUseCase;
  updateLearnUseCase: UpdateLearnUseCase;
  removeLearnUseCase: RemoveLearnUseCase;
  findAllLearnsUseCase: FindAllLearnsUseCase;

  constructor(readonly learnRepository: LearnRepository) {
    this.createUseCase = new CreateLearnUseCase(learnRepository);
    this.findLearnByUseCase = new FindLearnByUseCase(learnRepository);
    this.updateLearnUseCase = new UpdateLearnUseCase(learnRepository);
    this.removeLearnUseCase = new RemoveLearnUseCase(learnRepository);
    this.findAllLearnsUseCase = new FindAllLearnsUseCase(learnRepository);
  }
}
