import { ImediateClickModule } from './imediate-click.module';

describe('ImediateClickModule', () => {
  let imediateClickModule: ImediateClickModule;

  beforeEach(() => {
    imediateClickModule = new ImediateClickModule();
  });

  it('should create an instance', () => {
    expect(imediateClickModule).toBeTruthy();
  });
});
