import { Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role?: string;
  bio?: string;
  imgSrc?: string;
  alt?: string;
  email?: string;
  linkedin?: string;
}

export default function TeamMember({ name, role, bio, imgSrc, alt, email, linkedin }: TeamMemberProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="card-creative bg-white border border-slate-100 p-6 animate-fade-up">
      <div className="flex items-start gap-4">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={alt || name}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
            {initials}
          </div>
        )}

        <div>
          <p className="text-gray-900 font-semibold">{name}</p>
          {role && <p className="text-sm text-gray-600">{role}</p>}
        </div>
      </div>

      {bio && <p className="mt-4 text-sm text-gray-700">{bio}</p>}

      <div className="mt-4 flex items-center gap-3">
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-slate-600 hover:text-emerald-600 inline-flex items-center gap-2 text-sm"
            aria-label={`Email ${name}`}
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Email</span>
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-emerald-600 inline-flex items-center gap-2 text-sm"
            aria-label={`LinkedIn ${name}`}
          >
            <Linkedin size={16} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
