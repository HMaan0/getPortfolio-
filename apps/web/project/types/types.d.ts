type repo = {
  html_url: Url;
  name:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  language:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  forks_count:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  stargazers_count:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  watchers_count:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  open_issues_count:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
};

export interface Hero {
  name: string;
  des: string;
  image: string;
  words: string[];
}

export interface Github {
  github_username: string;
}

export interface Work {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title?: string;
  description?: string;
  liveLink?: string;
  codeLink?: string;
}

export interface AboutData {
  description: string;
  skills: string[];
  personalDetails?: {
    location: string;
    email: string;
  };
}

export interface Contact {
  LinkedIn: string;
  Twitter: string;
  Github: string;
  Email: string;
}

export interface Data {
  Hero: Hero;
  Github: Github;
  Work: Work[];
  projectData: Project[];
  aboutData: AboutData;
  contact: Contact;
}

export default Data;
