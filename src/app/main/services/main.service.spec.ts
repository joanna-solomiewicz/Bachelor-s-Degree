import { MainService } from './main.service';

let mainService,
  httpClientMock;

describe('MainService', () => {
  beforeEach(() => {
    httpClientMock = {
      get: jasmine.createSpy('HttpClient.get'),
      post: jasmine.createSpy('HttpClient.post')
    };

    mainService = new MainService(httpClientMock);
  });

  describe('getEsacs', () => {
    it('call get method from HttpClient with required parameters', () => {
      const urlGetEsacsEndpoint = '/api/esacs';

      mainService.getEsacs();

      expect(httpClientMock.get).toHaveBeenCalledWith(urlGetEsacsEndpoint);
    });
  });

  describe('esacToMidi', () => {
    it('call post method from HttpClient with required parameters', () => {
      const esacMock = { mock: 'mock' };
      const urlEsac2MidiEndpoint = '/api/esac2midi';
      const responseTypeMock = { responseType: 'arraybuffer' };

      mainService.esacToMidi(esacMock);

      expect(httpClientMock.post).toHaveBeenCalledWith(urlEsac2MidiEndpoint, esacMock, responseTypeMock);
    });
  });

  describe('searchEsacs', () => {
    it('call post method from HttpClient with required parameters', () => {
      const termsMock = { mel: 'mock', title: 'mock' };
      const urlSearchEsacsEndpoint = '/api/esacs';

      mainService.searchEsacs(termsMock);

      expect(httpClientMock.post).toHaveBeenCalledWith(urlSearchEsacsEndpoint, termsMock);
    });
  });
});
