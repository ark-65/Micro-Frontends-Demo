import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl ? environment.apiUrl : '';

const registerServer = `${baseUrl}/api/ddmp-register-server`;
const byitAuthorityServer = `${baseUrl}/api/authority`;

export { registerServer, byitAuthorityServer };
