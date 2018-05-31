import { AppNavModule } from './app-nav.module';

describe('AppNavModule', () => {
  let appNavModule: AppNavModule;

  beforeEach(() => {
    appNavModule = new AppNavModule();
  });

  it('should create an instance', () => {
    expect(appNavModule).toBeTruthy();
  });
});
