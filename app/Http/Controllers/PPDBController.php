<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\ApplicantDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class PPDBController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:100',
            'tempat_lahir' => 'required|string|max:50',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'anak_ke' => 'required|integer|min:1|max:20',
            'jumlah_saudara' => 'required|integer|min:0|max:50',
            'alamat_lengkap' => 'required|string',
            'provinsi' => 'required|string|max:50',
            'kota' => 'required|string|max:50',
            'kecamatan' => 'required|string|max:50',
            'kelurahan' => 'required|string|max:50',
            'whatsapp_santri' => 'required|string|max:20',
            'nama_ayah' => 'required|string|max:100',
            'pekerjaan_ayah' => 'nullable|string|max:100',
            'pendidikan_ayah' => 'nullable|string|max:50',
            'hp_ayah' => 'required|string|max:20',
            'nama_ibu' => 'required|string|max:100',
            'pekerjaan_ibu' => 'nullable|string|max:100',
            'pendidikan_ibu' => 'nullable|string|max:50',
            'hp_ibu' => 'required|string|max:20',
            'alamat_orang_tua' => 'required|string',
            'nama_wali' => 'nullable|string|max:100',
            'hubungan_wali' => 'nullable|string|max:50',
            'hp_wali' => 'nullable|string|max:20',
            'program_pendidikan' => 'required|in:SMP Darul Akhyar,MA Darul Akhyar',
            'program_unggulan' => 'nullable|json',
            'foto' => 'nullable|file|mimes:jpg,jpeg,png|max:10240',
            'kk' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:10240',
            'akta' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:10240',
            'ijazah' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:10240',
            'ktp' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:10240',
        ]);

        $validated['user_id'] = Auth::id();
        $validated['status'] = 'Pendaftar Baru';

        if (isset($validated['program_unggulan']) && is_string($validated['program_unggulan'])) {
            $validated['program_unggulan'] = json_decode($validated['program_unggulan'], true);
        }

        $applicant = Applicant::create($validated);

        $jenisMap = [
            'foto' => 'pas_foto',
            'kk' => 'kk',
            'akta' => 'akta',
            'ijazah' => 'ijazah',
            'ktp' => 'ktp_ayah',
        ];

        foreach ($jenisMap as $field => $jenis) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);
                $path = $file->store('applicant_documents/' . $applicant->id, 'public');
                ApplicantDocument::create([
                    'applicant_id' => $applicant->id,
                    'jenis_dokumen' => $jenis,
                    'original_name' => $file->getClientOriginalName(),
                    'stored_path' => $path,
                    'mime_type' => $file->getMimeType(),
                    'file_size' => $file->getSize(),
                ]);
            }
        }

        return Redirect::back()->with('success', [
            'id' => 'REG-' . $applicant->id,
            'namaLengkap' => $applicant->nama_lengkap,
            'programPendidikan' => $applicant->program_pendidikan,
        ]);
    }
}
