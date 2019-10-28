# Security

## Definitions

- Authentication: verifying that someone is who they claim to be.
- Authorization: deciding which resources a certain user should be able to access, and what they should be allowed to do with those resources.
- Federated Identity/Authentication: linking a person's electronic identity and attributes, stored across multiple distinct identity management systems. It is related to single sign-on (SSO), in which a user's single authentication ticket, or token, is trusted across multiple IT systems or even organizations.
- Single sign-on (SSO): it is a property of access control of multiple related, yet independent, software systems. With this property, a user logs in with a single ID and password to gain access to any of several related systems.

## Security Assertion Markup Language (SAML)

SAML is used for both authentication & authorization between two parties: a Service Provider (e.g. Office365) & an Identity Provider (e.g. AAD). The Service Provider (SP) agrees to trust the Identity Provider (IdP) in the authentication process. This is done through a SAML XML document sent by the IdP containing the user authorization & authentication and then redirected to the service provider.

## OAuth

OAuth is an authorization protocol used to protect resources. OAuth is a protocol designed to verify the identity of an end-user and grant permissions to a third party. This verification results in a token. The third party can use this token to access resources on the user’s behalf ("Delegated Authorization"). Tokens have a scope. The scope is used to verify whether a resource is accessible to a user, or not.

```text
Access Tokens are credentials used to access protected resources, as defined in Section 1.4 of OAuth 2.0 [RFC6749]. Access Tokens represent an end user’s authorization.
```

Access tokens are built up with scopes. A user requests the scopes he intends to use. Based on a policy, this is either granted or denied. The OAuth specification states the following in section 3.3 (Access Token Scope):

```text
The authorization server MAY fully or partially ignore the scope requested by the client, based on the authorization server policy or the resource owner's instructions. If the issued access token scope is different from the one requested by the client, the authorization server MUST include the 'scope' response parameter to inform the client of the actual scope granted.
```

That means the authorization server implements policies and that an authorization server may decide not to include a certain scope into an access token. However, the authorization server must notify the user. Note that, when speaking of OAuth, the specification does not mention claims. Nor does the specification mention identity in access tokens. These concepts are added in OpenID.

### Flows

#### Authorization Code Flow

- A user (already authenticated) is on the Awesome App, and clicks on a button within it which says "Import Contacts from Google".
- On clicking on this button, the Awesome App sends the following https request to accounts.google.com:

```http
https://accounts.google.com/o/oauth2/v2/auth?
client_id=awesome&
redirect_uri="https://awesome.com/callback"&
scope=contacts&
response_type=code&
state=foobar
```

- The user is directed to the accounts.google.com page and prompted to login to accounts.google.com using his google credentials.
- Based on the "Scope" parameters in the original request, the Authorization server (i.e. accounts.google.com) constructs a "Consent" page, which describes to the "resource owner" what exactly the "Client" is wanting to access. At this point the "Client" can click Yes/No on the consent page to grant consent to the appropriate resource.
- Once the "resource owner" clicks on "yes" on the "Consent" page, the Authorization server returns an "Authorization Code" to the "Client" and calls the "redirect URI" specified in the initial request.
- The "Client" now uses the "authorization code" sent by the "Authorization server" and using a back-channel communication, exchanges the "authorization code" for an "access token" from the "Authorization Server". The back-channel communication is communication sent out by web server to web server, (vs. front-end channel communication, which is communication between a browser and a web server). Thus, the "authorization code" is received on the front channel communication i.e. by the browser to web server. But to add that additional layer of security the "authorization code" is then used by the "Client" web server, and exchanged for an "access-token" from the "authorization server" by the "client" web server.
- Once the "Client" has the "access token" from the "authorization server" the client can use this "access token" to access google.contacts.

#### Implicit Code Flow

The other commonly used OAuth 2.0 process flow is called the "Implicit Code flow" process flow. This flow is used when the "Client" does not have a web server (the client may be a pure javascript app, a pure Angular or a pure React App). In this flow the only difference is that the "Authorization Server" returns the "access token" directly to the "client" (instead of first returning an authorization code, that must be exchanged for an access token). This is done since a pure javascript app does not have a web server to make the back channel call to exchange the "authorization code" for an "access token". The "OAuth 2.0 Implicit Code flow" is some what less secure, since it does not involve the back-channel exchange, however is the only alternative in case of pure javascript apps (that do not have a web server).

## OpenID (Connect)

OpenID is a protocol used for authentication, using an `id-token`. The `id-token` is the added piece in OpenId Connect, that allows the the OAuth 2.0 flow to be used for Federated Authentication.

When using OpenID, access tokens contain claims too. When using OpenID, a scope may contain multiple claims. Scopes are strings, claims are key-value pairs, and contain information about the identity. For example in `Auth0`, the scope `profile` includes `name`, `family_name`, `picture`, etc. So those key-value pairs would be returned with the `id-token`.

### Flows

The OpenId Connect process flow is the same as the OAuth 2.0 authorization process flow with the following additions:

- In addition to the access-token, an `id-token` (typically JWT) is returned by the authorization server.
- Userinfo end point for getting more user information (if the Id token is not sufficient).
- "openid" is passed as a parameter in the scope during the initial call to the Authorization server.
