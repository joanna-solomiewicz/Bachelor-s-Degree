import { MainService } from './main.service';

let mainService,
  httpClientMock;

describe('MainService', () => {
  beforeEach(() => {
    httpClientMock = {
      get: jasmine.createSpy('HttpClient.get'),
      post: jasmine.createSpy('HttpClient.post'),
      delete: jasmine.createSpy('HttpClient.delete'),
      patch: jasmine.createSpy('HttpClient.patch')
    };

    mainService = new MainService(httpClientMock);
  });

  describe('getEsacs', () => {
    it('call get method from HttpClient with required parameters', () => {
      const urlGetEsacsEndpoint = '/api/esac/list';

      mainService.getEsacs();

      expect(httpClientMock.get).toHaveBeenCalledWith(urlGetEsacsEndpoint);
    });
  });

  describe('esacToMidi', () => {
    it('call post method from HttpClient with required parameters', () => {
      const esacMock = { mock: 'mock' };
      const urlEsac2MidiEndpoint = '/api/esac2midi';

      mainService.esacToMidi(esacMock);

      expect(httpClientMock.post).toHaveBeenCalledWith(urlEsac2MidiEndpoint, esacMock);
    });
  });

  describe('esacToMidiFile', () => {
    it('call post method from HttpClient with required parameters', () => {
      const esacMock = { mock: 'mock' };
      const urlEsac2MidiEndpoint = '/api/esac2midi?format=file';
      const responseTypeMock = { responseType: 'arraybuffer' };

      mainService.esacToMidiFile(esacMock);

      expect(httpClientMock.post).toHaveBeenCalledWith(urlEsac2MidiEndpoint, esacMock, responseTypeMock);
    });
  });

  describe('searchEsacs', () => {
    it('call post method from HttpClient with required parameters', () => {
      const termsMock = [{ mock: 'mock', mock2: 'mock2' }, { mock: 'mock', mock2: 'mock2'}];
      const urlSearchEsacsEndpoint = '/api/esac/search';

      mainService.searchEsacs(termsMock);

      expect(httpClientMock.post).toHaveBeenCalledWith(urlSearchEsacsEndpoint, termsMock);
    });
  });

  describe('deleteEsac', () => {
    it('call delete method from HttpClient with required parameters', () => {
      const idMock = 111;
      const esacEndpoint = '/api/esac';

      mainService.deleteEsac(idMock);

      expect(httpClientMock.delete).toHaveBeenCalledWith(esacEndpoint + '/' + idMock);
    });
  });

  describe('updateEsac', () => {
    it('call update method from HttpClient with required parameters', () => {
      const idMock = 111;
      const esacMock = { mock: 'mock' };
      const esacEndpoint = '/api/esac';

      mainService.updateEsac(idMock, esacMock);

      expect(httpClientMock.patch).toHaveBeenCalledWith(esacEndpoint + '/' + idMock, JSON.stringify(esacMock));
    });
  });
});
